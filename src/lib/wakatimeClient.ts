import {
  WakaTimeApi,
  RANGE,
  SLICE_BY,
  SUMMARY_RANGE,
} from '@nick22985/wakatime-api';

const client = new WakaTimeApi(process.env.WAKATIME_API_KEY as string);

export default client;
