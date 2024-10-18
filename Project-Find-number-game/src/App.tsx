import { Fragment, useEffect, useState } from "react";

interface IQuantity {
  id: number | string;
  value: number;
  status: boolean;
  x?: number | string;
  y?: number | string;
  clicked?: boolean;
}

function App() {
  const [points, setPoints] = useState<number>(1);
  const [quantityArray, setQuantityArray] = useState<IQuantity[]>([]);
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [nextIdClick, setNextIdClick] = useState<number>(0);
  const [statusGame, setStatusGame] = useState<"failed" | "success" | "pending">("pending");

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const milliseconds = Math.floor((time - Math.floor(time)) * 10);
    const formattedMilliseconds = String(milliseconds).padStart(1, "0");
    if (minutes === 0 && seconds === 0) {
      return `0.${formattedMilliseconds}`;
    }

  const formattedSeconds = String(seconds).padStart(2, "0");
    return minutes > 0
      ? `${minutes}:${formattedSeconds}.${formattedMilliseconds}`
      : `${seconds}.${formattedMilliseconds}`;
  };

  const randomPositionItems = (n: number) => {
    const numbers = Array.from({ length: n }, (_, i) => i).map(num => {
      const x = `${Math.random() * 90}%`;
      const y = `${Math.random() * 90}%`;
      return { id: num, value: num, x, y, status: false };
    });

    setQuantityArray(numbers);
  };

  const handleClickItems = (quantity: IQuantity) => {
    if (statusGame !== "pending") { 
      return;
    }

    if (quantity.id === nextIdClick) {
      setQuantityArray(prev =>
        prev.map(
          item => (item.id === quantity.id ? { ...item, clicked: true } : item)
        )
      );

      const nextId = nextIdClick + 1;
      if (nextId === quantityArray.length) {
        setStatusGame("success");
      } else {
        setNextIdClick(nextId);
      }

      setTimeout(() => {
        setQuantityArray(prev =>
          prev.map(
            item => (item.id === quantity.id ? { ...item, status: true } : item)
          )
        );
      }, 1000);

    } else {
      setStatusGame("failed");
    }
  };

  const handleRestart = () => {
    setNextIdClick(0);
    setTime(0);
    randomPositionItems(points);
    setStatusGame("pending");
    setIsRunning(true);
  };

  const handlePoints = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(Number(event.target.value));
  };

  const handleStartGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNextIdClick(0);
    randomPositionItems(points);
    setStatusGame("pending");
    setIsRunning(true);
  };

  useEffect(
    () => {
      let timer: any;
      if (isRunning && statusGame === "pending") {
        timer = setInterval(() => {
          setTime(prevTime => prevTime + 0.1);
        }, 100);
      }

      if (statusGame === "success" || statusGame === "failed") {
        if (timer) {
          clearInterval(timer);
        }
      }

      return () => {
        if (timer) {
          clearInterval(timer);
        }
      };
    },
    [isRunning, statusGame]
  );

  return (
    <div className="App">
      <div className="m-auto w-[500px] border border-black">
        <div className="container px-4">
          <h1 className="uppercase text-2xl font-semibold transition-all">
            {statusGame === "pending"
              ? "let's play"
              : statusGame === "success"
                ? <span className="text-green-500">All cleared</span>
                : <span className="text-red-500">Game Over</span>}
          </h1>
          <div className="flex items-center">
            <p className="mr-14 w-16">Points :</p>
            <input
              type="number"
              className="border"
              onChange={event => handlePoints(event)}
              value={points}
            />
          </div>
          <div className="flex items-center">
            <div className="mr-14 w-16">Time:</div>
            <p>
              {formatTime(time)}s
            </p>
          </div>
          <form onSubmit={handleStartGame}>
            <div className="flex gap-4">
              {isRunning
                ? <button type="button" onClick={handleRestart}>
                    Restart
                  </button>
                : <button type="submit">Play</button>}
            </div>
          </form>
          <div
            className="relative border border-black p-2 my-4"
            style={{ width: "100%", height: "500px" }}
          >
            {quantityArray.map((quantity, index) =>
              <Fragment key={quantity.id}>
                {!quantity.status
                  ? <div
                      className={`absolute w-10 h-10 flex items-center justify-center rounded-full border-2 border-black cursor-pointer hover:bg-slate-200 hover:transition-colors ${quantity.clicked
                        ? "clicked"
                        : ""}`}
                      style={{
                        left: quantity.x,
                        top: quantity.y,
                        zIndex: quantityArray.length - index,
                        position: "absolute"
                      }}
                      onClick={() => handleClickItems(quantity)}
                    >
                      {quantity.value + 1}
                    </div>
                  : null}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
