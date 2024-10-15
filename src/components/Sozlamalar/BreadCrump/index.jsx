/* eslint-disable react/prop-types */
import { Arrow, Container, WrapperBtn } from "./style";
import Title from "../../Generic/Title";
import Subtitle from "../../Generic/Subtitle";
import { useLocation } from "react-router-dom";

const BreadCrump = (props) => {
  const location = useLocation();
  console.log(location);

  return (
    <Container>
      {location.state?.parent?.map((val) => {
        return (
          <>
            <Title key={val}>{val}</Title>
            <Arrow />
          </>
        );
      })}
      <Subtitle>{location?.state?.child}</Subtitle>
      <WrapperBtn>{props?.children}</WrapperBtn>
    </Container>
    // <Container title={location?.state?.parent}>
    //   <Title>{location?.state?.parent}</Title>
    //   {location.state?.child ? (
    //     <>
    //       <Arrow />
    //       <Subtitle>{location?.state?.child}</Subtitle>
    //     </>
    //   ) : null}
    //   <WrapperBtn>{props?.children}</WrapperBtn>
    // </Container>
  );
};

export default BreadCrump;
