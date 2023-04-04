import StyledPageHeadline from "../../components/Layout/StyledPageHeadline";

export default function ProfilePage() {
  return (
    <div>
      <StyledPageHeadline>MyProfile</StyledPageHeadline>
      <form>
        <label aria-label="age" htmlFor="age">
          Age:
        </label>
        <input type="text" id="age" name="age" value="29" />

        <label aria-label="weight" htmlFor="weight">
          Weight:
        </label>
        <input id="weight" type="text" name="weight" value="84"></input>

        <label aria-label="heigth" htmlFor="heigth">
          Heigth:
        </label>
        <input id="heigth" type="text" name="heigth" value="171"></input>

        <label aria-label="sport" htmlFor="sport">
          Sport:
        </label>
        <select id="sport" name="sport">
          <option value="Crossfit">Crossfit</option>
          <option value="Cycling">Cycling</option>
          <option value="Football">Football</option>
        </select>

        <label aria-label="level" htmlFor="level">
          Level:
        </label>
        <select id="level" name="level">
          <option value="beginner">Beginner</option>
          <option value="intermediate" selected>
            Intermediate
          </option>
          <option value="advanced">Advanced</option>
        </select>
      </form>
    </div>
  );
}
