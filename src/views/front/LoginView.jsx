import { plainApi, setToken } from "@/services";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import "@/style/From.css";

const Login = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			username: "23123@mail.com",
			password: "232323",
		},
	});

	const onSubmit = async (data) => {
		// console.log(data);
		setIsLoading(true);
		try {
			const response = await plainApi.post("/admin/signin", data);
			const { token, expired } = response.data;
			setToken(token, expired);
			toast.success("登入成功");
			navigate("/admin/dashboard", { replace: true });
		} catch (error) {
			const errMsg = error?.response?.data?.message || error?.message || "登入失敗，請檢查帳號密碼或網路連線";
			toast.error(`${errMsg}`);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="login-page">
				<div className="login-container">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-group">
							<label htmlFor="username">電子郵件:</label>
							<div className="input-wrapper">
								<span className="input-icon"></span>
								<input
									{...register("username", {
										required: "請輸入電子郵件",
										pattern: { value: /^\S+@\S+$/i, message: "請輸入有效的電子郵件地址" },
									})}
									type="email"
									id="username"
									name="username"
									placeholder="example@mail.com"
								/>
							</div>
							{errors.username && <p className="error-message">{errors.username.message}</p>}
						</div>

						<div className="form-group">
							<label htmlFor="password">密碼:</label>
							<div className="input-wrapper">
								<span className="input-icon"></span>
								<input
									{...register("password", {
										required: "請輸入密碼",
										minLength: { value: 6, message: "密碼至少需要6個字元" },
									})}
									type="password"
									id="password"
									name="password"
									placeholder="輸入您的密碼"
								/>
							</div>
							{errors.password && <p className="error-message">{errors.password.message}</p>}
						</div>
						<div className="form-group">
							<button type="submit" className="login-button" disabled={isLoading}>
								{isLoading ? "登入中..." : "登入"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
