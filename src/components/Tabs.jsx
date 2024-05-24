function Tabs ({childern , buttons, ButtonsContainer}){
    return(
         <>
          <ButtonsContainer>{buttons}</ButtonsContainer> 
            
          {childern}
        </>
    );


}
export default Tabs