function MissGoal() {
    return <h1>Missed Goal ronaldo</h1>
};

function MadeGoal() {
    return <h1>Goal from Son!!!!</h1>
};

function Goal(props) {
    const isGoal = props.isGoal;

    // if(isGoal) {
    //     return (
    //         <MadeGoal />
    //     );
    // }

    // return <MissGoal />;

    return (
        <>
            {isGoal ? <MadeGoal /> : <MissGoal />};
            {isGoal ? <h1>tremendes goal</h1> : <h1>missed goal</h1>};
        </>
    );
};


export default Goal;