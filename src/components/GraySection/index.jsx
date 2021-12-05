import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import {
  GreySectionMain,
  Title,
  Text,
  Span,
  PlayImgWrap,
  PlayImg,
  Ul,
  Li,
} from "./style";
import "../Header/main.scss";
import AnimateImg from "../../assets/images/uslugi-img.jpg";

const GreySection = ({ white, data }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <GreySectionMain wt={white}>
      <div className="container">
        <GreySectionMain.Body wt={white}>
          <GreySectionMain.BodyLeft wt={white}>
            <Title>{data[0].title1} </Title>
            {data[0].text.map((value) => (
              <Text key={value}>{value}</Text>
            ))}
            <Title>{data[0].title2}</Title>
            <Ul>
              {data[0].list.map((value) => (
                <Li>
                  <Span>{value.id})</Span>
                  {value.text}
                </Li>
              ))}
            </Ul>
          </GreySectionMain.BodyLeft>
          <GreySectionMain.BodyRight>
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="Y0knu9GLr_A"
                onClose={() => setOpen(false)}
              />
              <PlayImgWrap onClick={() => setOpen(true)}>
                <PlayImg src={data[0].url} />
              </PlayImgWrap>
            </React.Fragment>
          </GreySectionMain.BodyRight>
        </GreySectionMain.Body>
      </div>
    </GreySectionMain>
  );
};

export default GreySection;
