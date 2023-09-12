import styled from "styled-components";

export const RenderCount = styled.div`
  background-color: white;
  padding: 10px 5px;
  border-radius: 10px;
  color: dark-blue;
  width: max-content;
  margin: 10px 0px;
`
export const RenderCountHeader = ({count}:{count:number}) => {
  return (
    <RenderCount>Render Count: {count}</RenderCount>
  )
}