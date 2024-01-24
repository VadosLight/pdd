import { useGetAllTickets } from "entity/api/hooks/ticket";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const { data = [] } = useGetAllTickets();
  const nav = useNavigate();

  return (
    <div>
      Выберите билет
      <ul>
        {data.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                nav(`/testing/${item.id}`);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
