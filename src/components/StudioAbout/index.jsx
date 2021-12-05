import React, { useState } from "react";
import { StudioBlock, StudioText, Span, PlayWrap } from "./style";
import { ItemRight } from "../CarouselBlock/style";
import { StudioData } from "../../mock";
import ImgOne from "../../assets/images/study-img.jpg";
import ImgTwo from "../../assets/images/study-img2.jpg";
import ImgThree from "../../assets/images/study-img3.jpg";
import ModalVideo from "react-modal-video";
import { PlayBtn } from "../Header/style";

const StudioAbout = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container">
      <StudioBlock>
        <StudioBlock.Title>О студии</StudioBlock.Title>
        <StudioBlock.Body>
          <StudioBlock.BodyLeft>
            <StudioBlock.BodyLeftItem>
              <StudioBlock.BodyLeftImgOne src={ImgOne} />
              <StudioBlock.BodyLeftImgTwo src={ImgTwo} />
              <StudioBlock.BodyLeftImgThree src={ImgThree} />
            </StudioBlock.BodyLeftItem>

            <StudioBlock.Play>
              <React.Fragment>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="Y0knu9GLr_A"
                  onClose={() => setOpen(false)}
                />

                <PlayWrap>
                  <Span orr mr>
                    наша команда
                  </Span>
                  <PlayBtn
                    st
                    className="btn-primary"
                    onClick={() => setOpen(true)}
                  >
                    <PlayBtn.Icon />
                  </PlayBtn>
                </PlayWrap>
              </React.Fragment>
            </StudioBlock.Play>
          </StudioBlock.BodyLeft>
          <StudioBlock.BodyRight>
            <StudioText>
              <Span>Медиастудия FANABI</Span> - это команда профессионалов и
              энтузиастов с многолетним опытом работы в сфере режиссуры,
              управления медиа-проектами, операторского искусства, видео-монтажа
              и графического дизайна.
            </StudioText>
            <StudioText>
              Студия обладает всеми ресурсами и возможностями для воплощения
              самых смелых и креативных идей заказчиков.
            </StudioText>
            <StudioText>
              Мы не используем шаблонные решения и применяем индивидуальный
              подход к каждому клиенту.
            </StudioText>
            <ItemRight.Text>
              {StudioData.map(({ id, text }) => {
                return (
                  <ItemRight.Text key={id} df>
                    <ItemRight.IconWrap>
                      <ItemRight.IconCircle />
                    </ItemRight.IconWrap>
                    {text}
                  </ItemRight.Text>
                );
              })}
            </ItemRight.Text>
            <StudioText>
              Мы подскажем Вам ответы на эти и другие вопросы и поможем улучшить
              имидж и узнаваемость Вашего бренда, изготовим медиа-продукцию
              любой сложности, и поддержим Вашу организацию в достижении ее
              целей.
            </StudioText>
            <StudioText>
              Узнайте более подробно о наших услугах <Span orr>здесь</Span>
            </StudioText>
          </StudioBlock.BodyRight>
        </StudioBlock.Body>
      </StudioBlock>
    </div>
  );
};

export default StudioAbout;
