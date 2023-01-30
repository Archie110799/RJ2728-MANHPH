import React, {useCallback} from 'react';
import Count from '../components/Count';
import Button from '../components/Button';

export default function ParentComponent() {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(1000);

  // useCallback giữ cho một hàm không được tạo lại lần nữa, 
  // dựa trên mảng các phần phụ thuộc. 
  // Nó sẽ trả về chính function đó. 
  // Sử dụng nó khi mà bạn muốn truyền fuction vào component con 
  // và chặn không cho một hàm nào đó tiêu thời gian, 
  // tài nguyên phải tạo lại.
  // return func

  // Note: Khi không dùng useCallback thì version cũ của hàm sẽ được thu gom lại, 
  // nhưng nếu dùng useCallback nó sẽ được giữ lại ở trong bộ nhớ, 
  // trong trường hợp một trong các phần phụ thuộc sẽ hoạt động đúng trở lại 
  // để trả về version cũ của hàm đó.

  // Dùng useCallback Khi mà bạn cảm thâý thật sự không dùng nó 
  // thì hiệu suất của ứng dụng của bạn sẽ rất tồi tệ 
  // hoặc kết quả của việc thực thi một hàm không cần thiết. 
  // (ví dụ như gọi một API).

  const increaseAge = React.useCallback(() => {
    // setAge(age + 1);
    setAge((a) => a + 1);
  }, []);

  // const increaseAge = () => {
  //   setAge((a) => a + 1);
  // };

  // const increaseSalary = () => {
  //   setSalary((s) => s + 100);
  // };

  const increaseSalary = React.useCallback(() => {
    setSalary((s) => s + 100);
  }, []);

  // Tránh việc re-render cho những component render nặng
  // kĩ thuật memoization
  // Nó sẽ tạo ra function này đúng 1 lần đầu, 
  // những lần re-render khác nó chỉ trả về 1 function cũ
  // do empty dependences
  // trả về 1 func

  // Tổ chức tốt component, không cần add all callBack cho full app,
  // dùng khi render chart, animation -> tốn resource tài nguyên khi render

  return (
    <div>
      <h2>useCallback hooks</h2>
      <hr />
      <Count text='Age' count={age} />
      <Button onClick={increaseAge}>Increase Age</Button>

      <Count text='Salary' count={salary} />
      <Button onClick={increaseSalary}>Increase Salary</Button>
    </div>
  );
}
