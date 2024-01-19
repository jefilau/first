// TestContentStyles.js

export const styles = {
  container: {
    fontFamily: 'Arial, sans-serif', 
    color: '#333'
  },
  questionHeader: {
    borderBottom: '2px solid #4CAF50', 
    paddingBottom: '10px'
  },
  contentBox: {
    // 如果 content-box 有特定樣式，可以喺呢度加
  },
  questionText: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  inputStyle: {
    padding: '10px', 
    border: '1px solid #ccc', 
    borderRadius: '4px', 
    marginRight: '10px', 
    flex: '0 1 150px'
  },
  nextQuestionButton: {
    backgroundColor: '#4CAF50', 
    color: 'white', 
    border: 'none', 
    padding: '10px 20px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 100px'
  },
  navigationButton: {
    backgroundColor: '#ddd', 
    color: '#333', 
    border: 'none', 
    padding: '8px 16px', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    flex: '0 1 auto', 
    marginRight: '10px'
  },
  submitButton: {
    // 將原先 submitButtonStyle 既內容放喺呢度
  }
};
