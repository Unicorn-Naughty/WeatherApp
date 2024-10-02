import styled from "@emotion/styled";

export const WeatherDataWrapper = styled.div`
    margin-bottom: 25px;
    height: 300px;
`
export const WeatherDataContent = styled.div`
    border: 1px solid #000;
    width: 700px;
    padding: 25px;
    border-radius: 10px;
    @media (max-width: 1050px){
        width: 100%;
    }
`
export const WeatherDataTemp = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
`
export const WeatherDataDescr = styled.div`
    display: flex;
    justify-content: space-between;
`
export const WeatherIframe = styled.iframe`
    width: 700px;
    height: 300px; 
    @media (max-width: 1050px){
        width: 100%;
        margin-bottom: 25px;
    }
`