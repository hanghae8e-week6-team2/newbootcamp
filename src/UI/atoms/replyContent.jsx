import styled from "styled-components";

import ListGroup from 'react-bootstrap/ListGroup';

function replyContent() {
    return (
        <ReplyMain>

            <ReplyInput>
                <Alcoform>
                    <form action=""
                        // onSubmit={ReplyAdd}
                    >
                        <FormContent>
                            <Label>닉네임</Label>
                            <NicInput type="text"
                                // onChange={(e) => setUserValue(e.target.value)}
                                
                                // value={userValue}
                                id="user" maxLength="6" placeholder="닉네임을 입력해주세요."/>
                        </FormContent>
                        <FormContent>
                            <Label>코멘트</Label>
                            <CommentInput type="text"
                                // onChange={(e) => setCommentValue(e.target.value)}
                                
                                // value={commentValue}
                                id="comment" maxLength="20" placeholder="20자 이내로 간단한 후기를 작성해주세요."/>
                        </FormContent>
                        {/* <ThemeProvider
          theme={{
            palette: {
              green: "#9BFFDA",
              purple: "#FF9DFF",
              red: "#FF4646",
            },
          }}
        >
          <Button color="green" type="submit" style={{ margin: "0 0 0 8px" }}>
            추가
          </Button>
        </ThemeProvider> */
                        }
                    </form>
                    {/* <ul>
        {replyList.map((data) => (
          <ReplyItem
            key={data.id}
            replyId={data.id}
            username={data.username}
            comment={data.comment}
          ></ReplyItem>
        ))}
      </ul> */
                    }
                </Alcoform>
            </ReplyInput>

            <ListGroup as="ol" numbered="numbered">
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">르탄이
                        </div>
                        항해수료후 100일차
                    </div>

                </ListGroup.Item>

            </ListGroup>
        </ReplyMain>

    )
}

export default replyContent

const ReplyMain = styled.div `
  margin-left:60px ;
  margin-top:10px;
 `

const ReplyInput = styled.div `
  width:100%;
  height:100px;
  border-bottom:1px solid black;
  margin-bottom:20px;`

const Alcoform = styled.div `
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;
const FormContent = styled.div `
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;

`;
const Label = styled.label `
border-radius: 20px;
font-weight: bold;
color: black;
margin: 0 0 0 20px;
display:inline-block ;
width:100px ;
`;
const NicInput = styled.input `
width: 200px;
height: 35px;
border-radius: 1rem;
padding: 0.3rem;
color: black;
position:relative ;

`;

const CommentInput = styled.input `
width: 481px;
height: 35px;
border-radius: 20px;
padding: 0.3rem;
color: black;
`;
