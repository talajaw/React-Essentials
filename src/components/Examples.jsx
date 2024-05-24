import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data-with-examples";
import Tabs from "./Tabs.jsx";
import Section from "./Section";

function Examples() {
    const [selectTopic , setSelectTopic ]=useState();
    function handleSelect(selectedButton){
        setSelectTopic(selectedButton);

    }
    let tabContent = <p>Please selected a Topic</p>;
    if(selectTopic){
        tabContent=(
            <div id="tab-conten">
                  <h3>{EXAMPLES[selectTopic].title} </h3>
                  <p>{EXAMPLES[selectTopic].description}</p>
                  <pre>
                    <code>
                    {EXAMPLES[selectTopic].code}
                    </code>
                  </pre>
                </div>
        
          );
    }

 return(
    <Section title="Examples" id="examples">
     <Tabs
       ButtonsContainer="menu"
       buttons={
        <>
         <TabButton isSelected={selectTopic === "components"} onSelect={() => handleSelect("components")} label="Component" />
         <TabButton isSelected={selectTopic === "jsx"} onSelect={() => handleSelect("jsx")} label="jsx" />
         <TabButton isSelected={selectTopic === "state"} onSelect={() => handleSelect("state")} label="state" />
         <TabButton isSelected={selectTopic === "props"} onSelect={() => handleSelect("props")} label="props" />

        </>
       }
       childern={tabContent}
     >  
      
     </Tabs>
    
   </Section>


 );

}
export default Examples



