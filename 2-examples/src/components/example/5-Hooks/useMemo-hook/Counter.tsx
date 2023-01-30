// ? https://en.wikipedia.org/wiki/Memorization
import React from "react";

const expensiveFunction = (number: number) => {
  console.log("Calculating...");
  const max = 1000000000;

  // expensive calculation
  for (let i = 0; i < max; i++) {
    number += 1;
  }

  return number;
};

// useMemo giữ cho một hàm không được thực thi lại nếu 
// nó không nhận được một tập hợp các tham số đã được sử dụng trước đó. 
// Nó sẽ trả về kết quả của một function. 
// Sử dụng nó khi bạn muốn ngăn một số thao tác nặng 
// hoặc tốn kém tài nguyên được gọi trên mỗi lần render.
function WithoutMemoCounter() {
  const [count, setCount] = React.useState(0);
  const [todos, setTodos] = React.useState<Array<string>>([]);

  // Without React.useMemo(arrow_function)
  // const calculation = expensiveFunction(count);
  // Call mỗi khi component re-render
  // ---------------------------------------
  // Within React.useMemo(arrow_function)
  const calculation = React.useMemo(() => {
    return expensiveFunction(count);
  }, [count]);
  // Bắt buộc call thì count thay đổi

  // Data không đổi sau những lần re-render, trả về mảng đầu tiên tạo ra
  // Nó sẽ tạo ra function này đúng 1 lần đầu,
  // những lần re-render khác nó chỉ trả về 1 function cũ
  // do empty dependences
  // return 1 giá trị memoized value

  // lưu trữ React components vào trong cache 
  // để tránh việc render lại không cần thiết.

  // Note: điều này có thể sẽ lớn dần lên và không may nó lại làm giảm hiệu suất ứng dụng của bạn.

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button
          onClick={() => {
            setTodos((t: Array<string>) => [...t, "New Todo @ " + new Date()]);
          }}
        >
          Add Todo
        </button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          +
        </button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
}

export default WithoutMemoCounter;
