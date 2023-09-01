import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
interface Props {
   children: any;
}
const DefaultLayout: React.FC<Props> = ({ children }: Props) => {
   return (
      <div>
         <Header></Header>
         <NavBar></NavBar>
         {/*  Content page */}
         {children}
         <Footer></Footer>
      </div>
   );
};

export default DefaultLayout;
