import React from "react";

function Card() {
    return (
        <div
            className="position-relative d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#002244" }}
        >
            {/* Background Text */}
            <h1
                className="position-absolute text-white"
                style={{
                    top: "10%",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    opacity: 0.5,
                    textAlign: "center",
                }}
            >

                Simplify Your Links
            </h1>

            <h2
                className="position-absolute text-white"
                style={{
                    top: "20%",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    opacity: 0.5,
                    textAlign: "center",
                }}
            >

                Leverage our URL shortener, QR Codes, and landing pages to captivate your audience and guide them to the information they need. Create, customize, and monitor everything seamlessly with the Bitly Connections Platform.
            </h2>

            {/* Card */}
            <div
                className="card p-4"
                style={{
                    top: "30%",
                    width: "40rem",
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h3 className="text-dark mb-2">Shorten a long link</h3>
                <p className="text-muted mb-4">No credit card required.</p>
                <div className="form-group">
                    <label htmlFor="urlInput" className="text-dark mb-2">
                        Paste your long link here
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="urlInput"
                        placeholder="https://example.com/my-long-url"
                        style={{
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                        }}
                    />
                </div>
                <button
                    className="btn btn-primary mt-4 w-100"
                    style={{
                        borderRadius: "10px",
                        backgroundColor: "#0056b3",
                        borderColor: "#0056b3",
                    }}
                >
                    Get your link for free →
                </button>
            </div>
        </div>
    );
}

export default Card;
