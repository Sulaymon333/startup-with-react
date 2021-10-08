import { useFetch } from './useFetch';

const url = 'https://course-api.com/javascript-store-products';

function Index() {
    const { isLoading, data } = useFetch(url);
    console.log(isLoading, data);
    return (
        <div>
            <h1>Custom Hooks</h1>
            <h2>{isLoading ? 'Loading' : 'Data'}</h2>
            <div className="container pre">
                <pre>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </div>
        </div>
    );
}

export default Index;
