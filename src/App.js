
import MyFirstComponent from './Component/MyFirstComponent'
import MySecondComponent from './Component/MySecondComponent';
import MyThirdComponent from './Component/MyThirdComponent';
import MyFourthComponent from './Component/MyFourthComponent';
import MyFifthComponent from './Component/MyFifthComponent';
import MySixthComponent from './Component/MySixthComponent';
import MySeventhComponent from './Component/MySeventhComponent';
import MyEighthComponent from './Component/MyEighthComponent';
import MyNinthComponent from './Component/MyNinthComponent';
import MyTenthComponent from './Component/MyTenthComponent';

import MasterComponent from './Component/MasterComponent';
import ParentComponent from  './Component/parentcomponent';

import DashboardComponent from  './Component1/DashboardComponent';
 import Counter from './Component/state/counter';
 


function App() {

  return (
    <div>
        
        <MasterComponent name="1" height="45"/>
        <MasterComponent name="2" height="67"/>
        <MasterComponent name="3" height="34"/>
        <MasterComponent name="4" height="30"/>

        <ParentComponent name="kojo" gender="male" age="15years" email="kojo@gmail.com"/>
    
         <DashboardComponent firstname="Jess" 
         lastname="agyei" 
         email="agyeiadjetey@gmail.com" 
         date_of_birth="10th may , 2000"
         mobile="0206333333"/>

         <Counter />
         
    </div>
   
    
  );
}


export default App;
