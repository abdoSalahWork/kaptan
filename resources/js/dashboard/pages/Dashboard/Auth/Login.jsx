import { useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("dashboard.login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="auth-page-wrapper pt-5">
            <div
                className="auth-one-bg-position auth-one-bg"
                id="auth-particles"
            >
                <div className="bg-overlay"></div>

                <div className="shape">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1440 120"
                    >
                        <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                    </svg>
                </div>
            </div>

            <div className="auth-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mt-sm-5 mb-4 text-white-50">
                                <div>
                                    <a
                                        href="index.html"
                                        className="d-inline-block auth-logo"
                                    >
                                        <img
                                            src="assets/images/logo-light.png"
                                            alt=""
                                            height="20"
                                        />
                                    </a>
                                </div>
                                <p className="mt-3 fs-15 fw-medium">
                                    Premium Admin & Dashboard Template
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card mt-4">
                                <div className="card-body p-4">
                                    <div className="text-center mt-2">
                                        <h5 className="text-primary">
                                            Welcome Back!
                                        </h5>
                                        <p className="text-muted">
                                            Sign in to continue to Velzon.
                                        </p>
                                    </div>
                                    <div className="p-2 mt-4">
                                        <form onSubmit={submit}>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="email"
                                                    className="form-label"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter Email"
                                                />
                                                {errors.email && (
                                                    <div className="text-danger">
                                                        {errors.email}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mb-3">
                                                <div className="float-end">
                                                    <a
                                                        href="auth-pass-reset-basic.html"
                                                        className="text-muted"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <label
                                                    className="form-label"
                                                    htmlFor="password-input"
                                                >
                                                    Password
                                                </label>
                                                <div className="position-relative auth-pass-inputgroup mb-3">
                                                    <input
                                                        type="password"
                                                        className="form-control pe-5 password-input"
                                                        id="password-input"
                                                        value={data.password}
                                                        onChange={(e) =>
                                                            setData(
                                                                "password",
                                                                e.target.value
                                                            )
                                                        }
                                                        placeholder="Enter password"
                                                    />
                                                    {errors.password && (
                                                        <div className="text-danger">
                                                            {errors.password}
                                                        </div>
                                                    )}
                                                    <button
                                                        className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                        type="button"
                                                    >
                                                        <i className="ri-eye-fill align-middle"></i>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="auth-remember-check"
                                                    checked={data.remember}
                                                    onChange={(e) =>
                                                        setData(
                                                            "remember",
                                                            e.target.checked
                                                        )
                                                    }
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="auth-remember-check"
                                                >
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="mt-4">
                                                <button
                                                    className="btn btn-success w-100"
                                                    type="submit"
                                                    disabled={processing}
                                                >
                                                    {processing
                                                        ? "Signing In..."
                                                        : "Sign In"}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="mb-0">
                                    Don't have an account?{" "}
                                    <a
                                        href="auth-signup-basic.html"
                                        className="fw-semibold text-primary text-decoration-underline"
                                    >
                                        Signup
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <p className="mb-0 text-muted">
                                    &copy;
                                    <script>
                                        document.write(new
                                        Date().getFullYear());
                                    </script>{" "}
                                    Velzon. Crafted with{" "}
                                    <i className="mdi mdi-heart text-danger"></i>{" "}
                                    by Themesbrand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
