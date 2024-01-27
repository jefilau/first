import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const TestHeaderNav = () => {
  const handleHelloMathsClick = () => {
    // 顯示彈出提示
    const isConfirmed = window.confirm("If you return to the main page, the test will end and all your previous answers will be lost.");
    if (isConfirmed) {
      // 用戶確認退出，導航到主頁
      window.location.href = "/";
    }
    // 如果用戶取消，則什麼都不做，留在當前頁面
  };

  return (
    <div className="Menu">
      <table className="link-table">
        <tbody>
          <tr>
            <td className="left-link">
              {/* Hello Maths 鏈接 */}
              <a className="top-bar-link home-logo" onClick={handleHelloMathsClick}>Hello Maths</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TestHeaderNav;
