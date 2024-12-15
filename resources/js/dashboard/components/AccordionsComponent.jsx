const AccordionsComponent = ({items, id}) => {
    return (
        <div className="accordion accordion-flush" id={id}>
            {items.map((item, key) => (
                <div className="accordion-item material-shadow" key={key}>
                    <h2 className="accordion-header" id={"accordionbordered"+id+key}>
                        <button className={"accordion-button " + (key != 0 ? "collapsed" : "")} type="button" data-bs-toggle="collapse"
                                data-bs-target={"#collapse1"+id+key} aria-expanded={key == 0 ? "true" : ""}
                                aria-controls={"#collapse1"+id+key}
                        >
                            {item.title}
                        </button>
                    </h2>
                    <div id={"collapse1"+id+key} className={"accordion-collapse collapse" + (key != 0 ? " mt-2" : " show")}
                         aria-labelledby={"accordionbordered"+id+key} data-bs-parent={"#"+id}>
                        <div className="accordion-body">
                            {item.body}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AccordionsComponent;
