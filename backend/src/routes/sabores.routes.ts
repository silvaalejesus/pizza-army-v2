import { Request, Response, Router } from "express";
import { AppDataSource } from "../data-source";
import { Sabores } from "../entity/Sabores";

const saboresRouter = Router();

saboresRouter.post("/", async (request: Request, response: Response) => {
  try {
    const saboresRepository = AppDataSource.getRepository(Sabores);
    const novoSabor = await saboresRepository.save(request.body);

    // Envia a resposta e retorna Promise<void>
    response.status(201).json(novoSabor);
    return;
  } catch (error) {
    console.log("error.message -> sabores ", error.message);
    response.status(500).json({ error: "Erro ao salvar sabor" });
  }
});

saboresRouter.get("/", async (_, response: Response) => {
  response.json(await AppDataSource.getRepository(Sabores).find());
});

saboresRouter.get("/:nome", async (request: Request, response: Response) => {
  const respository = AppDataSource.getRepository(Sabores);
  const res = await respository.find({
    where: {
      nome: request.params.nome,
    },
  });

  response.json(res);
});

saboresRouter.put("/:id", async (request: Request, response: Response) => {
  try {
    const respository = AppDataSource.getRepository(Sabores);
    const sabor = await respository.findOneBy({
      id: request.params.id,
    });

    if (!sabor) {
      response.status(404).json({ message: "Sabor não encontrado" });
      return;
    }

    sabor.nome = request.body.nome;
    sabor.descricao = request.body.descricao;
    sabor.preco = request.body.preco;
    sabor.fotoUrl = request.body.fotoUrl;

    const atualizarSabor = await respository.save(sabor);
    response.status(204).json(atualizarSabor);

    return;
  } catch (error) {
    console.log("error", error);
    response.status(500).json({ message: "Erro interno do servidor" });
  }
});

saboresRouter.delete("/:id", async (request: Request, response: Response) => {
  try {
    const repository = AppDataSource.getRepository(Sabores);
    const sabor = await repository.findOneBy({
      id: request.params.id,
    });

    if (!sabor) {
      response.status(404).json({ message: "Sabor não encontrado" });
    }

    await repository.remove(sabor);
    response.status(200).json({ message: "Sabor deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar sabor:", error);
    response.status(500).json({ message: "Erro interno do servidor" });
  }
});

export default saboresRouter;
