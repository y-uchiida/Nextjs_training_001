import axios, { AxiosResponse } from "axios";
import camelCaseKeys from "camelcase-keys";

export const useAxios = () => {
	const instance = axios.create({
		headers: { "Content-Type": "application/json" },
		responseType: "json",
		baseURL: "https://nextjs-training-001-default-rtdb.firebaseio.com/"
	});

	// firebase から受け取ったデータのキー名をスネークケースからキャメルケースに変換する
	instance.interceptors.response.use(
		(response: AxiosResponse): AxiosResponse => {
			return camelCaseKeys(response, { deep: true });
		}
	);

	return { axios: instance }
}
