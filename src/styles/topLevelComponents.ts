import styled from '@emotion/styled';

export const HeaderComponent = styled.header`
margin-bottom: 30px;
box-shadow:0px 12px 3px -9px rgba(34, 60, 80, 0.2) ;
`
export const NavbarComponent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
`
export const NavComponent = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;   
`
export const MainComponent = styled.div`
    padding: 0 15px;
    flex-grow: 1;
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
    min-height: calc(100vh - 200px);
    @media (max-width: 1050px){
        display: block;
    }
`
export const ContentDiv = styled.div`
    margin-bottom: 50px;
    height:280px;
    @media (max-width: 1050px){
        max-width: 100%;
    }
`
export const RightSideDiv = styled.div`

    margin-left: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: 1050px){
        display: block;
    }
`
export const InfoBlock = styled.div`
    margin-right: 10px;
    @media (max-width: 1050px){
    margin-right: 0;
    margin-bottom: 25px;
    }
`
export const AddBlock = styled.aside`
align-items: flex-end;
@media (max-width: 1050px){
        display: flex;
        justify-content: space-between;
    }
`
export const AddBlockElement = styled.div`
width: 100px;
align-self: flex-end;
height: 200px;
border: 1px solid #000;
margin-bottom: 20px;
@media (max-width: 1050px){
    width: 200px;
    height: 100px;
    }
`

export const FooterComponent = styled.footer`
background-color: rgba(34, 60, 80, 0.2);
padding: 20px;
`
export const FooterInnerDiv = styled.div`
color: #000;
justify-content: center;
display: flex;
`