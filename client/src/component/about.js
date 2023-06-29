import Layout from "../component/home/homeadded";

export default function About() {
  return (
    <Layout>
      <>
        <div className="container mx-auto">
          <div className="py-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-gray-100 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Our Mission</h2>
                  <p className="mb-4">
                    I am a Software devloper, who is very fascinated about the virtual technlogies.
                    <p className="mb-4">
                        I have lot of tech. tools known, let me provide the following details
                    <ol>
                        <li>Reactjs</li>
                        <li>JavaScript</li>
                        <li>Node Js</li>
                        <li>Python</li>
                    </ol>
                  </p>
                  </p>
                  <p className="mb-4">
                    this is a experimental
                    </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-gray-100 rounded-lg p-6">
                  <h2 className="text-lg font-bold mb-4">Our Team</h2>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, diam vel tincidunt pulvinar, nunc sapien tincidunt
                    mauris, vel luctus dolor sapien vel velit. Nulla facilisi.
                    Sed euismod, diam vel tincidunt pulvinar, nunc sapien
                    tincidunt mauris, vel luctus dolor sapien vel velit. Nulla
                    facilisi.
                  </p>
                  <p className="mb-4">
                    Sed euismod, diam vel tincidunt pulvinar, nunc sapien
                    tincidunt mauris, vel luctus dolor sapien vel velit. Nulla
                    facilisi. Sed euismod, diam vel tincidunt pulvinar, nunc
                    sapien tincidunt mauris, vel luctus dolor sapien vel velit.
                    Nulla facilisi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
