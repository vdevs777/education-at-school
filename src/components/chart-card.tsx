import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { VictoryContainer, VictoryLabel, VictoryPie } from "victory";

type Data = {
  x: string;
  y: number;
};

type ChartCardProps = {
  question: string;
  array: Data[];
  observations?: string;
};

const COLORS = ["#1E90FF", "#50C878", "#FFD700", "#FF5733"];

export function ChartCard({ question, array, observations }: ChartCardProps) {
  const [variantChartSize, setVariantChartSize] = useState(false);
  const { width } = useWindowSize();
  const breakpoint1 = width > 1024;
  const total = array.reduce((acc, cur) => acc + cur.y, 0);

  useEffect(() => {
    setVariantChartSize(breakpoint1);
  }, []);

  return (
    <div className="w-full bg-slate-900 sm:[430px] rounded-xl p-4">
      <h4 className="text-slate-300 text-md lg:text-lg font-semibold">
        {question}
      </h4>
      <div className="flex items-center flex-col">
        <VictoryPie
          data={array}
          colorScale={COLORS}
          containerComponent={<VictoryContainer responsive={false} />}
          width={variantChartSize ? 300 : 200}
          height={variantChartSize ? 300 : 200}
          labels={({ datum }) => `${Math.round((datum.y / total) * 100)}%`}
          events={[{ target: "data", eventHandlers: {} }]}
          labelComponent={
            <VictoryLabel style={{ fill: "#CBD5E1", fontFamily: "Inter" }} />
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {array.map((item, index) => (
            <div key={item.x} className="flex flex-row items-center mb-1">
              <div
                className="sm:size-4 size-2 mr-2"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <p className="text-slate-300 text-xs sm:text-sm">{item.x}</p>
            </div>
          ))}
          <p className="text-slate-300 text-xs sm:text-sm">{observations}</p>
        </div>
      </div>
    </div>
  );
}
