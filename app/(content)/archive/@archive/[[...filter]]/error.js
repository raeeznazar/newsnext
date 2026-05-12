'use client';
export default function FilterError({ error, reset }) {
  return (
    <>
      <div id="error">
        <div>An error occurred</div>
        <p>{error?.message || 'Unknown error'}</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </>
  );
}
