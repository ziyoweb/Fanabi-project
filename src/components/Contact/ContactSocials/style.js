import styled from "styled-components";
import { ReactComponent as facebookIconContact } from "../../../assets/icons/facebook.svg";
import { ReactComponent as instagramIconContact } from "../../../assets/icons/instagram.svg";
import { ReactComponent as twitterIconContact } from "../../../assets/icons/twitter.svg";

export const ContactSocialsWrap = styled.div`
  padding: 45px 70px 46px 40px;
  background-color: #f3f3f3;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 400px) {
    padding: 25px 20px;
  }
`;

export const ContactInformation = styled.div``;

export const ContactItem = styled.div`
  :not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const ContactTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 5px;
  color: #615f5f;
  font-family: "Montserrat", sans-serif;
`;

export const ContactText = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #1d1b1b;
  font-family: "Montserrat", sans-serif;
`;

export const ContactSocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

ContactSocialIcons.Facebook = styled(facebookIconContact)`
  margin-bottom: 35px;
  cursor: pointer;
`;
ContactSocialIcons.Instagram = styled(instagramIconContact)`
  margin-bottom: 35px;
  cursor: pointer;
`;
ContactSocialIcons.Twitter = styled(twitterIconContact)`
  cursor: pointer;
`;
