import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div>
      <h3 className="my-4 text-4xl text-center font-semibold italic">Links</h3>
      <div className="px-20 text-justify pb-10">
        <p>
          <Link
            className="font-bold hover:text-lime-600"
            to={
              "https://web.archive.org/web/20190618080513/http://www.thecenterfresno.net/"
            }
          >
            The Center
          </Link>{" "}
          is a unique gathering of healers and cultural creatives whose mission
          is to facilitate integrity, healing, heart work, and conscious
          knowing. The Center offers a holistic approach to well being with a
          variety of healing arts professionals, including an intuitive healer,
          a holistic physician, massage and shiatsu therapists, a marriage and
          family therapist, an ayurvedic specialist, and a counselor, as well as
          fine art, good music, and a unique lending library to help balance and
          integrate body, mind, and spirit.
        </p>
        <p className="my-4">
          <Link
            className="font-bold hover:text-lime-600"
            to={"https://www.ayurvedacollege.com/"}
          >
            Ayurveda College{" "}
          </Link>
          California College of Ayurveda (CCA) is an internationally recognized,
          state-approved school offering a two year, clinically oriented
          education program leading to certification as a Clinical Ayurvedic
          Specialist (CAS). CCA is dedicated to providing the highest quality
          education, health care, and research in the field of Ayurveda. It
          trains students to become the healers of the future; Ayurvedic
          practitioners dedicated to understanding the whole person physically,
          emotionally, and spiritually.
        </p>
        <p className="my-4">
          <Link
            className="font-bold hover:text-lime-600"
            to={"https://yogaforlivingstudios.com/"}
          >
            Yoga For Living Serving{" "}
          </Link>
          the central valley of California since 2001, Yoga For Living is
          recognized by John Friend, the founder of Anusara Yoga as an Anusara
          Inspired Studio. With a focus on clear, intelligent instruction Yoga
          For Living has earned a reputation as one of the premier studios in
          the area, suitable for practitioners of all levels.e.
        </p>
        <p className="mb-4">
          <Link
            className="font-bold hover:text-lime-600"
            to={"http://www.rejuvenationtherapies.net/"}
          >
            Rejuvenation Therapies{" "}
          </Link>
          Located in Grass Valley CA, Rejuvenation Therapies specializes in
          Pancha Karma detoxification and stress-reduction programs. The most
          popular stand-alone treatment is the Bliss therapy, which includes a
          two-person synchronized oil massage, shirodhara and herbal steam
          therapy. It is the basis of the pancha karma programs, but by itself
          is particularly useful for health problems associated with stress,
          grief, and aging.
        </p>
        <p className="mb-4">
          <Link
            className="font-bold hover:text-lime-600"
            to={"https://www2.colomaresort.com/"}
          >
            Coloma Resort{" "}
          </Link>
          To see natural beauty and connect with nature, visit this gorgeous,
          adventurous outdoor place for a week or just a weekend. A favorite
          getaway for the family...
        </p>
        <p className="mb-4">
          <Link
            className="font-bold hover:text-lime-600"
            to={"https://www.pbyoga.com/"}
          >
            Perfect Balance{" "}
          </Link>
          Yoga Conveniently located on the NW corner of Fresno and Shaw, Perfect
          Balance Yoga offers all levels of yoga, from the basic to advanced.
          Perfect Balance Yoga also offers kid’s yoga, pre and postnatal yoga,
          and hot yoga. PB yoga is a Yoga Teacher Training School registered
          through Yoga Alliance, and offers a 200 hour certification program.
        </p>
      </div>
    </div>
  );
};
export default Links;
