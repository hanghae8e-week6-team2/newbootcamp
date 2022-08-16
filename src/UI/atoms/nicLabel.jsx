//지금 로그인한 유저 아이디가 들어가야합니다.
import styled from "styled-components";
function NicLabel({id,content}){
    console.log(id)
    return (
        <Nic>{id} {content}</Nic>
       
    )
}

export default NicLabel;

const Nic = styled.div`
    
 `