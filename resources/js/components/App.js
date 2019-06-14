import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";

function App() {
    return (
        <div className="form-box">
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <label for="selectSchool"> Select School </label>{" "}
                        <select
                            className="form-control form-control-sm"
                            name="selectSchool"
                            id="selectSchool"
                        >
                            <option value="1">
                                Agriculture & Mineral Sciences{" "}
                            </option>{" "}
                            <option value="2">
                                Applied Sciences & Technology{" "}
                            </option>{" "}
                            <option value="3"> Life Sciences </option>{" "}
                            <option value="4">
                                Management & Business Administration{" "}
                            </option>{" "}
                            <option value="5"> Physical Sciences </option>{" "}
                            <option value="6"> Social Sciences </option>{" "}
                        </select>{" "}
                    </div>
                    <div className="col-md-4">
                        <label for="selectDept"> Select Department </label>{" "}
                        <select
                            className="form-control form-control-sm"
                            name="selectDept"
                            id="selectDept"
                        >
                            <option value="10"> FES </option>{" "}
                            <option value="20"> ARC </option>{" "}
                            <option value="21"> CEP </option>{" "}
                            <option value="22"> CEE </option>{" "}
                            <option value="23"> CSE </option>{" "}
                            <option value="24"> EEE </option>{" "}
                            <option value="25"> FET </option>{" "}
                            <option value="26"> IPE </option>{" "}
                            <option value="27"> MEE </option>{" "}
                            <option value="28"> PME </option>{" "}
                            <option value="30"> BMB </option>{" "}
                            <option value="31"> GEB </option>{" "}
                            <option value="40"> BUS </option>{" "}
                            <option value="50"> CHE </option>{" "}
                            <option value="51"> GEE </option>{" "}
                            <option value="52"> MAT </option>{" "}
                            <option value="53"> OCG </option>{" "}
                            <option value="54"> PHY </option>{" "}
                            <option value="55"> STA </option>{" "}
                            <option value="60"> ANT </option>{" "}
                            <option value="61"> BAN </option>{" "}
                            <option value="62"> ECO </option>{" "}
                            <option value="63"> ENG </option>{" "}
                            <option value="64"> PSS </option>{" "}
                            <option value="65"> PAD </option>{" "}
                            <option value="66"> SCW </option>{" "}
                            <option value="67"> SOC </option>{" "}
                        </select>{" "}
                    </div>
                    <div className="col-md-4">
                        <label for="selectSemester"> Select Semester </label>{" "}
                        <select
                            className="form-control form-control-sm"
                            name="selectSemester"
                            id="selectSemester"
                        >
                            <option value="11"> 1 / 1 </option>{" "}
                            <option value="21"> 2 / 1 </option>{" "}
                            <option value="31"> 3 / 1 </option>{" "}
                            <option value="41"> 4 / 1 </option>{" "}
                        </select>{" "}
                    </div>{" "}
                </div>{" "}
                <br />
                <button className="btn btn-primary" type="submit">
                    Find Routine{" "}
                </button>{" "}
            </form>{" "}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#app_welcome"));
