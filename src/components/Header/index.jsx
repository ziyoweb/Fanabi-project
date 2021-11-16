import React, { useState } from "react";
import { Wrapper, HeaderItem, HeaderLeftItem, PlayBtn } from "./style";
import { HeaderData } from "../../mock/index";
import ModalVideo from "react-modal-video";
import "./main.scss";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Wrapper>
      <div className="container">
        <HeaderItem>
          <HeaderItem.Left>
            <HeaderItem.Title>
              Студия по созданию
              <HeaderItem.Span>медиапродуктов</HeaderItem.Span>
            </HeaderItem.Title>

            {HeaderData.map(({ id, text }) => {
              return (
                <HeaderLeftItem key={id}>
                  <HeaderLeftItem.IconWrap>
                    <HeaderLeftItem.Icon />
                  </HeaderLeftItem.IconWrap>
                  <HeaderLeftItem.Text>{text}</HeaderLeftItem.Text>
                </HeaderLeftItem>
              );
            })}
          </HeaderItem.Left>

          <HeaderItem.Right>
            <HeaderItem.RightIn>
              <React.Fragment>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="Y0knu9GLr_A"
                  onClose={() => setOpen(false)}
                />

                <PlayBtn className="btn-primary" onClick={() => setOpen(true)}>
                  <PlayBtn.Icon />
                </PlayBtn>
              </React.Fragment>
            </HeaderItem.RightIn>
          </HeaderItem.Right>
        </HeaderItem>
      </div>
    </Wrapper>
  );
};

export default Header;
