function GlassesList(props) {
    const { list, onSelect } = props;

    return (
        <div className="container bg-white p-4 rounded shadow-sm" style={{ maxWidth: '800px' }}>
            <div className="glasses-grid-container">
                {list.map((item) => (
                    <div className="d-flex justify-content-center" key={item.id}>
                        <button
                            className="btn glasses-item-btn"
                            onClick={() => onSelect(item)}
                        >
                            <img src={`./img/g${item.id}.jpg`} alt={item.name} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}