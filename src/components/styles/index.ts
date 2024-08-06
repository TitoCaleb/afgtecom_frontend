import styled from "styled-components";

export const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  margin-bottom: 40px;
`;

export const Avatarcontainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AvatarName = styled.p`
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const BackgroundContent = styled.div`
  padding: 24px;
  height: 99%;
  background: #fff;
  border-radius: 5px;
  overflow: auto;
`;

export const BreadcrumbContainer = styled.div`
  display: "flex";
  margin-left: 20px;
  margin-bottom: -15px;
  margin-top: 10px;
`;
