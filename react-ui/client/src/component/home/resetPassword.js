import Layout from "./homeadded";
import ResetPasswordForm from "./resetPasswordForm";
const loggedUser = 0 || localStorage.getItem("user");

const ResetPassword = () => {
  return (
    <Layout>
      {loggedUser ? (
        <div>
            <ResetPasswordForm/>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
};
export default ResetPassword;
