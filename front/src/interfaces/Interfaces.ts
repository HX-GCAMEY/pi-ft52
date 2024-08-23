interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

interface ICategory {
  id: number;
  name: string;
  products: IProduct[];
}

interface ILogin {
  email: string;
  password: string;
}

interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  // credential?: ICredential;
  // role: Role;
  orders?: IOrderResponse[];
}

interface ICreateOrder {
  userId: number;
  products: number[];
}

interface IOrderResponse {
  id: number;
  status: string;
  date: string;
  user: IUser;
  products: IProduct[];
}

interface ILoginUser {
  email: string;
  password: string;
}

interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

interface IProductCardProps {
  product: IProduct;
  remove?: () => void;
}

interface IProductsGridProps {
  products: IProduct[];
}

interface ICartContextType {
  cartItems: IProduct[];
  addToCart: (product: number) => void;
  removeFromCart: (product: number) => void;
  total: number;
  proceedToCheckout: () => void;
}

interface IUserResponse {
  login: boolean;
  user: Partial<IUser> | null;
  token: string;
}

interface IUserContextType {
  user: Partial<IUserResponse> | null;
  setUser: React.Dispatch<React.SetStateAction<Partial<IUserResponse> | null>>;
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  signIn: (credentials: ILogin) => Promise<boolean>;
  signUp: (user: Omit<IUser, "id">) => Promise<boolean>;
  // getOrders: () => void;
  orders: IOrderResponse[] | [];
  logOut: () => void;
}

export type {
  IProduct,
  IProductCardProps,
  IProductsGridProps,
  ICartContextType,
  IOrderResponse,
  ICreateOrder,
  IRegisterUser,
  ILoginUser,
  ILogin,
  IUserContextType,
  IUserResponse,
  IUser,
};
