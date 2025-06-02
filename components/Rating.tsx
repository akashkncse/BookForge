export default function Rating({ val }: { val: number }) {
  return (
    <div className="rating rating-sm">
      {[1, 2, 3, 4, 5].map((i) => (
        <input
          key={i}
          type="radio"
          className="mask mask-star"
          checked={val === i}
          readOnly
        />
      ))}
    </div>
  );
}
