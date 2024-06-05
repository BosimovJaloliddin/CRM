import { useState } from "react";
import Subtitle from "../Generic/Subtitle";
import { ArrowIcon, DateCard, Fragment, Wrapper } from "./moliyaStyle";
import useDate, { weeks } from "../../hooks/date";

const Moliya = () => {
  const date = useDate();
  const [active, setActive] = useState(new Date().getDate());
  const [weekCount, changeWeek] = useState(0);

  const onClickDate = (value) => {
    if (date?.week(weekCount)[0].getDate() === value.getDate()) {
      changeWeek(weekCount - 6);
    } else if (date.week(weekCount)[6].getDate() === value.getDate()) {
      changeWeek(weekCount + 6);
    }
    setActive(value.getDate());
  };

  const onClickForward = () => {
    changeWeek(weekCount + 6);
  };
  const onClickBackward = () => {
    changeWeek(weekCount - 6);
  };

  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left="true" onClick={onClickForward} />
        <Subtitle>
          {date?.month?.full} {date?.year}
        </Subtitle>
        <ArrowIcon onClick={onClickBackward} />
      </Fragment>
      <Fragment mt={16} mb={16}>
        {date?.week(weekCount)?.map((value) => {
          const ac = active === value.getDate();
          return (
            <DateCard
              onClick={() => onClickDate(value)}
              active={ac}
              key={value}
            >
              <Subtitle color={ac && "white"} fs={14}>
                {weeks[value?.getDay()].short}
              </Subtitle>
              <Subtitle color={ac && "white"} fs={14}>
                {value.getDate()}
              </Subtitle>
            </DateCard>
          );
        })}
      </Fragment>
      <Subtitle fs={14} color="#929faf">
        {date?.date}-{date.month.full}, {date.year}
      </Subtitle>
      <Subtitle fs={32} mt={8}>
        8 566 500{" "}
        <Subtitle ml={16} fs={24} color="#52c41a">
          +22%
        </Subtitle>
      </Subtitle>
      <Fragment mt={24} mb={8}>
        <Subtitle>Talabalar</Subtitle>
        <Subtitle>5 999 000</Subtitle>
      </Fragment>
      <Fragment>
        <Subtitle>Darslik sotuvi</Subtitle>
        <Subtitle>2 999 000</Subtitle>
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;
