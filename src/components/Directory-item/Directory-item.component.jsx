import { Body, DirectoryItemContainer, BackgroundImage,StyledLink } from "./DirectoryItem.style";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
       
        <StyledLink to={`/shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </StyledLink>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
