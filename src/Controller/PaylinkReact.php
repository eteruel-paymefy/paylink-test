<?php
// src/Controller/PaylinkReactController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PaylinkReactController extends AbstractController
{
    #[Route('/paylink/react')]
    public function main(): Response
    {
        $data = [
            'name' => 'Luis',
            'age' => 25
        ];

        return $this->render('paylink/react-components.html.twig', [
            'name' => $data['name'],
            'age' => $data['age']
        ]);
    }
}