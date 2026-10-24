
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

const INITIAL_NOTES = [
  {
    id: "currently",
    label: "CURRENTLY",
    bg: "bg-[#fff6a8]",
    rotation: -2.5,
    hoverRotation: -0.5,
    pin: true,
    tape: false,
    desktopPos: { x: 10, y: 15 },
    mobilePos: { x: 5, y: 10 },
    width: 310,
    mobileWidth: 265,
    height: 235,
    mobileHeight: 185,
  },
  {
    id: "toolkit",
    label: "TECH TOOLKIT",
    bg: "bg-[#b3e5fc]",
    rotation: 2.5,
    hoverRotation: 1,
    pin: false,
    tape: true,
    desktopPos: { x: 175, y: 125 },
    mobilePos: { x: 95, y: 95 },
    width: 315,
    mobileWidth: 265,
    height: 235,
    mobileHeight: 185,
  },
  {
    id: "project",
    label: "LATEST PROJECT",
    bg: "bg-[#f8bbd0]",
    rotation: -2.5,
    hoverRotation: -0.5,
    pin: false,
    tape: true,
    desktopPos: { x: 25, y: 225 },
    mobilePos: { x: 15, y: 175 },
    width: 310,
    mobileWidth: 265,
    height: 220,
    mobileHeight: 180,
  },
];

export default function DraggableStickyNotes({ containerRef }) {
  const [positions, setPositions] = useState({});
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [highestZ, setHighestZ] = useState(30);
  const [isMobileView, setIsMobileView] = useState(false);

  // Blue note is initially in front of the other notes.
  const [zIndices, setZIndices] = useState({
    currently: 20,
    project: 22,
    toolkit: 24,
  });

  const dragRef = useRef({
    id: null,
    startX: 0,
    startY: 0,
    initialX: 0,
    initialY: 0,
    hasMoved: false,
  });

  // Calculate initial positions.
  const getDefaultPosition = useCallback(
    (note, containerWidth) => {
      const isMobile =
        containerWidth < 1024 ||
        (typeof window !== "undefined" &&
          window.innerWidth < 1024);

      const noteWidth = isMobile
        ? note.mobileWidth || 265
        : note.width || 370;

      if (isMobile) {
        const maxX = Math.max(
          4,
          containerWidth - noteWidth - 4
        );

        return {
          x: Math.max(
            4,
            Math.min(note.mobilePos.x, maxX)
          ),
          y: note.mobilePos.y,
        };
      }

      return {
        x: note.desktopPos.x,
        y: note.desktopPos.y,
      };
    },
    []
  );

  // Calculate screen boundaries for dragging.
  const getScreenBoundaries = useCallback(
    (noteWidth, noteHeight) => {
      if (
        !containerRef.current ||
        typeof window === "undefined"
      ) {
        return {
          minX: 4,
          maxX: 2000,
          minY: 4,
          maxY: 4000,
        };
      }

      const containerRect =
        containerRef.current.getBoundingClientRect();

      const scrollX = window.scrollX || window.pageXOffset || 0;
      const scrollY = window.scrollY || window.pageYOffset || 0;

      const docWidth = Math.max(
        document.documentElement.scrollWidth,
        window.innerWidth
      );

      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );

      const containerDocLeft = containerRect.left + scrollX;
      const containerDocTop = containerRect.top + scrollY;

      return {
        minX: 4 - containerDocLeft,
        maxX: Math.max(
          4 - containerDocLeft,
          docWidth - noteWidth - 4 - containerDocLeft
        ),
        minY: 4 - containerDocTop,
        maxY: Math.max(
          4 - containerDocTop,
          docHeight - noteHeight - 4 - containerDocTop
        ),
      };
    },
    [containerRef]
  );

  // Initialize notes at their configured positions.
  const initializePositions = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth =
      containerRef.current.getBoundingClientRect().width;

    const isMobile =
      containerWidth < 1024 ||
      (typeof window !== "undefined" &&
        window.innerWidth < 1024);

    setIsMobileView(isMobile);

    const newPositions = {};

    INITIAL_NOTES.forEach((note) => {
      newPositions[note.id] = getDefaultPosition(
        note,
        containerWidth
      );
    });

    setPositions(newPositions);
  }, [containerRef, getDefaultPosition]);

  // Clear old saved positions so the configured defaults are used.
  useEffect(() => {
    try {
      [
        "gitesh_portfolio_sticky_notes_v5_desktop",
        "gitesh_portfolio_sticky_notes_v5_mobile",
        "gitesh_portfolio_sticky_notes_v6_desktop",
        "gitesh_portfolio_sticky_notes_v6_mobile",
      ].forEach((key) => {
        localStorage.removeItem(key);
      });
    } catch {
      // Ignore unavailable localStorage.
    }
  }, []);

  useEffect(() => {
    initializePositions();

    const handleResize = () => {
      initializePositions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initializePositions]);

  // Reset all notes to their configured initial positions.
  const resetPositions = () => {
    initializePositions();

    setZIndices({
      currently: 20,
      project: 22,
      toolkit: 24,
    });

    setHighestZ(30);
  };

  // Start dragging a note.
  const handlePointerDown = (e, noteId) => {
    if (e.button !== undefined && e.button !== 0) return;

    const currentPos = positions[noteId];
    if (!currentPos) return;

    dragRef.current = {
      id: noteId,
      startX: e.clientX,
      startY: e.clientY,
      initialX: currentPos.x,
      initialY: currentPos.y,
      hasMoved: false,
    };

    setActiveId(noteId);

    const nextZ = highestZ + 1;

    setHighestZ(nextZ);
    setZIndices((prev) => ({
      ...prev,
      [noteId]: nextZ,
    }));

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Ignore unsupported pointer capture.
    }
  };

  // Move a note while dragging.
  const handlePointerMove = (e, noteId) => {
    if (dragRef.current.id !== noteId) return;

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      dragRef.current.hasMoved = true;
    }

    if (!containerRef.current) return;

    const note = INITIAL_NOTES.find(
      (item) => item.id === noteId
    );

    const noteWidth = isMobileView
      ? note?.mobileWidth || 265
      : note?.width || 370;

    const noteHeight = isMobileView
      ? note?.mobileHeight || 185
      : note?.height || 280;

    const bounds = getScreenBoundaries(
      noteWidth,
      noteHeight
    );

    const newX = Math.max(
      bounds.minX,
      Math.min(
        dragRef.current.initialX + dx,
        bounds.maxX
      )
    );

    const newY = Math.max(
      bounds.minY,
      Math.min(
        dragRef.current.initialY + dy,
        bounds.maxY
      )
    );

    setPositions((prev) => ({
      ...prev,
      [noteId]: {
        x: newX,
        y: newY,
      },
    }));
  };

  // Stop dragging.
  const handlePointerUp = (e, noteId) => {
    if (dragRef.current.id !== noteId) return;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore unsupported pointer capture.
    }

    dragRef.current.id = null;
    setActiveId(null);
  };

  // Keyboard accessibility.
  const handleKeyDown = (e, noteId) => {
    const step = e.shiftKey ? 30 : 10;

    let dx = 0;
    let dy = 0;

    if (e.key === "ArrowLeft") dx = -step;
    else if (e.key === "ArrowRight") dx = step;
    else if (e.key === "ArrowUp") dy = -step;
    else if (e.key === "ArrowDown") dy = step;
    else return;

    e.preventDefault();

    const note = INITIAL_NOTES.find(
      (item) => item.id === noteId
    );

    const noteWidth = isMobileView
      ? note?.mobileWidth || 265
      : note?.width || 370;

    const noteHeight = isMobileView
      ? note?.mobileHeight || 185
      : note?.height || 280;

    const bounds = getScreenBoundaries(
      noteWidth,
      noteHeight
    );

    setPositions((prev) => {
      const current = prev[noteId];
      if (!current) return prev;

      return {
        ...prev,
        [noteId]: {
          x: Math.max(
            bounds.minX,
            Math.min(current.x + dx, bounds.maxX)
          ),
          y: Math.max(
            bounds.minY,
            Math.min(current.y + dy, bounds.maxY)
          ),
        },
      };
    });
  };

  return (
    <div className="relative w-full h-full select-none">
      {INITIAL_NOTES.map((note) => {
        const pos = positions[note.id];

        const isDragging = activeId === note.id;
        const isHovered =
          hoveredId === note.id && !isDragging;

        const baseZ = zIndices[note.id] || 20;

        const zIndex = isDragging
          ? 200
          : isHovered
            ? 150
            : baseZ;

        if (!pos) return null;

        const currentWidth = isMobileView
          ? note.mobileWidth || 265
          : note.width || 370;

        const currentHeight = isMobileView
          ? note.mobileHeight || 185
          : note.height || 280;

        let currentTransform;
        let currentShadow;

        if (isDragging) {
          currentTransform =
            "translate3d(0, -8px, 0) scale(1.05) rotate(0deg)";

          currentShadow =
            "0 30px 60px -8px rgba(28,25,23,0.38), 0 16px 24px -4px rgba(28,25,23,0.22)";
        } else if (isHovered) {
          currentTransform =
            `translate3d(0, -12px, 0) scale(1.045) rotate(${note.hoverRotation}deg)`;

          currentShadow =
            "0 26px 50px -6px rgba(28,25,23,0.25), 0 14px 22px -4px rgba(28,25,23,0.15), 0 0 0 1px rgba(28,25,23,0.06)";
        } else {
          currentTransform = `rotate(${note.rotation}deg)`;

          currentShadow =
            "0 12px 26px rgba(28,25,23,0.14), 0 4px 8px rgba(28,25,23,0.06)";
        }

        return (
          <article
            key={note.id}
            tabIndex={0}
            role="region"
            aria-label={`${note.label} sticky note (draggable anywhere on screen)`}
            onPointerDown={(e) =>
              handlePointerDown(e, note.id)
            }
            onPointerMove={(e) =>
              handlePointerMove(e, note.id)
            }
            onPointerUp={(e) =>
              handlePointerUp(e, note.id)
            }
            onPointerCancel={(e) =>
              handlePointerUp(e, note.id)
            }
            onKeyDown={(e) =>
              handleKeyDown(e, note.id)
            }
            onMouseEnter={() => setHoveredId(note.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`group absolute p-6 pt-9 sm:p-7 sm:pt-10 touch-none rounded-[3px] cursor-grab active:cursor-grabbing ${note.bg}`}
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              width: `${currentWidth}px`,
              minHeight: `${currentHeight}px`,
              transform: currentTransform,
              boxShadow: currentShadow,
              zIndex,
              transition: isDragging
                ? "transform 0.1s ease, box-shadow 0.1s ease"
                : "transform 0.34s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.34s ease, z-index 0s",
            }}
          >
            {/* Paper corner fold */}
            <span
              className="sticky-curl"
              aria-hidden="true"
            />

            {/* Pin */}
            {note.pin && (
              <span
                className={`pin transition-all duration-300 ${isHovered
                    ? "scale-125 -rotate-12"
                    : ""
                  }`}
                aria-hidden="true"
              />
            )}

            {/* Tape */}
            {note.tape && (
              <span
                className={`tape transition-all duration-300 ${isHovered
                    ? "-translate-y-1 -rotate-1 opacity-95"
                    : ""
                  }`}
                aria-hidden="true"
              />
            )}

            <div className="relative">
              {note.id === "currently" ? (
                <>
                  <small className="block mb-2 font-mono text-[10px] font-bold tracking-widest text-ink/70 uppercase">
                    CURRENTLY
                  </small>

                  <strong className="block font-display text-[24px] sm:text-[26px] leading-[1.08] tracking-tight text-ink uppercase">
                    Full Stack
                    <br />
                    Developer
                  </strong>

                  <p className="mt-3 font-handwritten text-[21px] sm:text-[24px] font-semibold text-ink">
                    @ Available for Hire
                  </p>
                </>
              ) : note.id === "toolkit" ? (
                <>
                  <small className="block mb-2 font-mono text-[10px] font-bold tracking-widest text-ink/70 uppercase">
                    TECH TOOLKIT
                  </small>

                  <strong className="block font-display text-[26px] sm:text-[28px] leading-[1.06] tracking-tight text-ink uppercase">
                    MERN Stack
                  </strong>

                  <p className="mt-3 font-handwritten text-[21px] sm:text-[23px] font-semibold text-ink">
                    React · Node · Express · MongoDB
                  </p>
                </>
              ) : (
                <>
                  <small className="block mb-2 font-mono text-[10px] font-bold tracking-widest text-ink/70 uppercase">
                    LATEST PROJECT
                  </small>

                  <strong className="block font-display text-[26px] sm:text-[28px] leading-[1.06] tracking-tight text-ink uppercase">
                    MediBook
                  </strong>

                  <p className="mt-2.5 font-handwritten text-[19px] sm:text-[21px] font-semibold text-ink">
                    <span className="inline-block bg-white/75 px-2.5 py-1 rounded-sm -rotate-2 shadow-xs">
                      + Live Booking &amp; QR
                    </span>
                  </p>
                </>
              )}
            </div>
          </article>
        );
      })}

      {/* Drag indicator and reset */}
      <div className="absolute z-20 flex items-center gap-2.5 select-none bg-white/85 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-black/10 shadow-sm left-1/2 -translate-x-1/2 bottom-1 sm:bottom-2 whitespace-nowrap">
        <span className="font-handwritten text-base sm:text-lg font-bold text-pen -rotate-2">
          you can drag these anywhere ↗
        </span>

        <button
          type="button"
          onClick={resetPositions}
          className="font-mono text-[10px] font-bold tracking-wider text-ink/70 hover:text-orange underline cursor-pointer transition-colors"
          title="Reset sticky note positions"
        >
          [reset]
        </button>
      </div>
    </div>
  );
}
