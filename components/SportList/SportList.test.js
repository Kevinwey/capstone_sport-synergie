import { render, screen } from "@testing-library/react";
import SportList from ".";

const data = [
  {
    name: "testValue",
  },
];

test("are the sports rendered in a list?", () => {
  render(<SportList sports={data} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});
