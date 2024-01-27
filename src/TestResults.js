import React from 'react';
import { Link } from 'react-router-dom';

function TestResults({ userAnswers, componentsArray, score, elapsedTime }) {
  const today = new Date().toLocaleDateString();
  const totalMarks = componentsArray.length;
  
  // 格式化時間
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };
  // 實現保存結果為 HTML 的功能
  const handleSaveResults = () => {
    // 將結果轉換為 HTML 格式
    const htmlContent = `
      <html>
        <head>
          <title>Test Results</title>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { margin-left: 20px; }
            table { width: 100%; background-color: #f2f2f2; border-radius: 10px; overflow: hidden; }
            th, td { padding: 8px; text-align: left; }
            .even { background-color: #f9f9f9; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Result</h2>
            <p>Date: ${new Date().toLocaleDateString()}</p>
            <p>Your Mark: ${score} / ${componentsArray.length}</p>
            <table>
              <thead>
                <tr>
                  <th>Question No.</th>
                  <th>Question</th>
                  <th>Your Answer</th>
                  <th>Result</th>
                  <th>Correct Answer</th>
                </tr>
              </thead>
              <tbody>
                ${componentsArray.map((component, index) => `
                  <tr class="${index % 2 === 0 ? 'even' : ''}">
                    <td>${index + 1}</td>
                    <td>${component.component.ShownText}</td>
                    <td>${userAnswers[index]}</td>
                    <td style="color: ${component.component.Answer === userAnswers[index] ? 'green' : 'red'}">
                      ${component.component.Answer === userAnswers[index] ? 'Correct' : 'Incorrect'}
                    </td>
                    <td>${component.component.Answer === userAnswers[index] ? '' : component.component.Answer}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </body>
      </html>
    `;
  
    // 創建一個 Blob 對象並設置文件類型為 HTML
    const blob = new Blob([htmlContent], { type: 'text/html' });
  
    // 創建一個可下載鏈接
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'test-results.html';
  
    // 觸發下載
    downloadLink.click();
  
    // 清理並移除鏈接
    URL.revokeObjectURL(downloadLink.href);
    downloadLink.remove();
  };
  
  // 實現返回主頁的功能
  const handleBackToHome = () => {
    console.log("返回主頁功能尚未實現。");
  };
  
  //Style  //////////////////////////////////////////////////////////////////////////////////////////////////
  const buttonStyle = {
    backgroundColor: '#4CAF50', 
    color: 'white', 
    border: 'none', 
    padding: '10px 20px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 100px'
  };
  const linkStyle = {
    backgroundColor: '#4CAF50', 
    color: 'white', 
    border: 'none', 
    padding: '10px 20px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 100px', 
    textDecoration: 'none', // 移除底線
    fontSize: '16px', // 調整字體大小，你可以根據需要設置
    display: 'inline-block', // 確保與按鈕樣式一致
    textAlign: 'center', // 文字居中
    lineHeight: 'normal' // 調整行高
  };
  const cellStyle = {
    textAlign: 'left',
    padding: '8px', // 為了美觀，你可能會想添加一啲 padding
  };
  const tableStyle = {
    width: '100%',
    backgroundColor: '#f2f2f2', // 淺灰色背景
    borderRadius: '10px', // 圓角
    overflow: 'hidden', // 保持圓角
  };

  // 偶數列的背景色
  const evenRowStyle = {
    backgroundColor: '#f9f9f9' // 更淺的灰色
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', marginLeft: '20px' }}>
      <h2>Result</h2>
      <p>Date: {today}</p>
      <p>Your Mark: {score} / {totalMarks}</p>
      <div style={{ marginBottom: '20px' }}>
        <table style={tableStyle}>
        <thead>
          <tr>
            <th style={cellStyle}></th>
            <th style={cellStyle}>Question</th>
            <th style={cellStyle}>Your Answer</th>
            <th style={cellStyle}>Result</th>
            <th style={cellStyle}>Correct Answer</th>
        </tr>
        </thead>
        <tbody>
            {componentsArray.map((component, index) => {
              // 檢查答案是否未作答
              const userAnswer = userAnswers[index];
              const displayAnswer = userAnswer !== null && userAnswer !== '' && !isNaN(userAnswer) 
                                    ? userAnswer 
                                    : 'Not Answered';

              return (
                <tr key={index} style={index % 2 === 0 ? evenRowStyle : null}>
                  <td>{index + 1}</td> {/* 顯示題號 */}
                  <td>{component.component.ShownText}</td>
                  <td>{displayAnswer}</td>
                  <td style={{ color: component.component.Answer === userAnswers[index] ? 'green' : 'red' }}>
                    {component.component.Answer === userAnswers[index] ? 'Correct' : 'Incorrect'}
                  </td>
                  <td>
                    {component.component.Answer === userAnswers[index] ? '' : component.component.Answer}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>
        <button style={buttonStyle} onClick={handleSaveResults}>
          Save Result
        </button>
        <Link to="/" style={linkStyle}>
          Return
        </Link>
      </div>

  </div>
  );
}

export default TestResults;

