function Model(props) {
    const { glasses } = props;

    return (
        <div className="d-flex justify-content-center my-4" style={{ gap: '100px' }}>
            <div className="model-box">
                <img src="./img/model.jpg" alt="Model" className="w-100 rounded" />
                {glasses && (
                    <img src={glasses.url} alt={glasses.name} className="glasses-overlay" />
                )}
                {glasses && (
                    <div className="glasses-info">
                        <h6 className="m-0 text-warning">{glasses.name}</h6>
                        <span className="badge badge-danger">${glasses.price}</span>
                        <p className="small mb-0 mt-1">{glasses.desc}</p>
                    </div>
                )}
            </div>

            <div className="model-box">
                <img src="./img/model.jpg" alt="Model Base" className="w-100 rounded" />
            </div>
        </div>
    );
}