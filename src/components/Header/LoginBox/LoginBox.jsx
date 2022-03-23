
import { LoginBox } from './LoginBox.styles';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({openModal}) => {
  return (
    <>
  <LoginBox>
    <ul>
      <li><button className="btn btn-link" role="link" onClick={()=>openModal(true)}>LOG IN</button></li>
      <li>|</li>
      <li><button className="btn btn-link" role="link" onClick={()=>openModal(false)}>SIGN IN</button></li>
    </ul>
  </LoginBox>

  </>
);
}
