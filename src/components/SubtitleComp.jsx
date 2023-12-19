import React from "react";
import { Alert } from "react-bootstrap";

function SubtitleComp() {
  return (
    <div className=" text-center">
      <h2>Che Belli Quei Book!</h2>
      <Alert key="warning" variant="warning">
        MegaKebab
      </Alert>
    </div>
  );
}
export default SubtitleComp;

// function Welcome() {
//     return (
//       <div>
//         <h2>Che Belli quei tovaglioli da Kebab</h2>
//         <Alert key="warning" variant="warning">
//           DART KEBAB
//         </Alert>
//       </div>
//     );
//   }

//   export default Welcome;
