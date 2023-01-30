import RESTAURANTS_LIST from "../../restaurants-list";

export const Restaurant = () => {
  return RESTAURANTS_LIST.map(({ id, name }) => (
    <div key={id}>
      <h1>{name}</h1>
    </div>
  ));
};
