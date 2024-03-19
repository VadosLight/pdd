import { useGetAllTickets } from "entity/api/hooks/ticket";
import { useNavigate } from "react-router-dom";
import { Ticket } from "shared/ui/ticket";

export const MainPage = () => {
  const { data = [] } = useGetAllTickets();
  const nav = useNavigate();

  return (
    <div>
      Выберите билет
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {data.map((item) => {
          return (
            <Ticket
              name={item.name}
              key={item.id}
              onClick={() => {
                nav(`/testing/${item.id}`);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
};
