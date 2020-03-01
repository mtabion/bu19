import { START, STOP, UPDATE_TIME, RESET, RECORD_LAP } from "./actions";

const initialState = {
  startTime: undefined,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
  totalMilliseconds: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START:
      if (state.startTime === undefined) {
        return {
          startTime: new Date().getTime(),
          totalMilliseconds: state.totalMilliseconds
        };
      } else {
        return state;
      }
    case STOP:
      let nowStop = Date.now();

      let elapsedMillisecondsStop = nowStop - state.startTime;

      return {
        totalMilliseconds: state.totalMilliseconds + elapsedMillisecondsStop,
        minutes: state.minutes,
        seconds: state.seconds,
        milliseconds: state.milliseconds,
        startTime: undefined
      };
    case UPDATE_TIME:
      let now = Date.now();

      let elapsedMilliseconds = now - state.startTime + state.totalMilliseconds;

      let elapsedMinutes = Math.floor(elapsedMilliseconds / 1000 / 60);
      let elapsedSeconds = Math.floor(
        (elapsedMilliseconds - elapsedMinutes * 60 * 1000) / 1000
      );

      let milliseconds =
        elapsedMilliseconds -
        elapsedMinutes * 60 * 1000 -
        elapsedSeconds * 1000;
      return {
        startTime: state.startTime,
        seconds: elapsedSeconds,
        minutes: elapsedMinutes,
        milliseconds: milliseconds,
        totalMilliseconds: state.totalMilliseconds
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
}
export default reducer;
