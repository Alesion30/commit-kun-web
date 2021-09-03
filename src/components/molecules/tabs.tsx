import { VFC } from "react";
import { TabCell } from "~/components/atoms/tab_cell";

type TabsProps = {
  tabs: string[];
  activeIndex: number;
  onClick: (index: number) => void;
};

export const Tabs: VFC<TabsProps> = ({ tabs, activeIndex, onClick }) => {
  return (
    <ul className="flex cursor-pointer">
      {tabs.map((tab, index) => {
        const active = activeIndex === index;
        return (
          <TabCell
            key={`tab_${tab}_${index}`}
            name={tab}
            active={active}
            onClick={() => onClick(index)}
          />
        );
      })}
    </ul>
  );
};
